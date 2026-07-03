import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)
const targetEmail = process.env.CONTACT_RECEIVER_EMAIL || 'info@brightlife.edu.np'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { formType, botField } = body

    // Honeypot spam protection: silently filter bot submissions
    if (botField) {
      return NextResponse.json({ success: true, message: 'Spam filtered' })
    }

    if (formType === 'contact') {
      const { firstName, lastName, email, subject, message } = body

      const htmlContent = `
        <div style="font-family: sans-serif; padding: 20px; color: #1e293b; max-width: 600px; border: 1px solid #f1f5f9; rounded: 12px;">
          <h2 style="color: #0f172a; border-bottom: 2px solid #ff5b5b; padding-bottom: 10px; margin-bottom: 20px;">New Contact Message Received</h2>
          <p><strong>Name:</strong> ${firstName} ${lastName}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Subject:</strong> ${subject}</p>
          <div style="background-color: #f8fafc; padding: 15px; border-radius: 8px; border-left: 4px solid #111827; margin-top: 15px;">
            <p style="margin: 0; white-space: pre-wrap; font-style: italic;">"${message}"</p>
          </div>
          <table width="100%" border="0" cellspacing="0" cellpadding="0" style="margin-top: 30px; border-top: 1px solid #e2e8f0; padding-top: 10px;">
            <tr>
              <td style="font-size: 11px; color: #64748b; font-family: sans-serif;">
                Sent via Bright Life Educational Institute Website
              </td>
              <td align="right" style="font-size: 11px; color: #64748b; font-family: sans-serif;">
                Powered by <a href="https://techsangi.com.np" style="color: #ff5b5b; text-decoration: none; font-weight: bold;">Tech Sangi</a>
              </td>
            </tr>
          </table>
        </div>
      `

      const { data, error } = await resend.emails.send({
        from: 'Bright Life Website <onboarding@resend.dev>',
        to: targetEmail,
        subject: `[Contact Form] ${subject} - from ${firstName} ${lastName}`,
        html: htmlContent,
        replyTo: email,
      })

      if (error) {
        return NextResponse.json({ error: error.message }, { status: 400 })
      }

      return NextResponse.json({ success: true, data })
    }

    if (formType === 'admission') {
      const {
        firstName,
        lastName,
        guardianName,
        email,
        contactNo,
        gender,
        address,
        schoolName,
        grade,
        semesterSubject,
        otherCourses,
        convenientTime,
      } = body

      const htmlContent = `
        <div style="font-family: sans-serif; padding: 20px; color: #1e293b; max-width: 600px; border: 1px solid #f1f5f9; rounded: 12px;">
          <h2 style="color: #0f172a; border-bottom: 2px solid #ff5b5b; padding-bottom: 10px; margin-bottom: 20px;">New Admission Registration Form Submitted</h2>
          <div style="display: grid; grid-template-cols: 1fr 1fr; gap: 10px; margin-bottom: 20px;">
            <p><strong>Student Name:</strong> ${firstName} ${lastName}</p>
            <p><strong>Guardian Name:</strong> ${guardianName}</p>
            <p><strong>Gender:</strong> ${gender}</p>
            <p><strong>Contact No:</strong> <a href="tel:${contactNo}">${contactNo}</a></p>
            <p><strong>Email Address:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Address:</strong> ${address}</p>
            <p><strong>School / College:</strong> ${schoolName}</p>
            <p><strong>Grade / Class:</strong> ${grade}</p>
            <p><strong>Semester / Subject:</strong> ${semesterSubject || 'N/A'}</p>
            <p><strong>Other Courses Selected:</strong> ${otherCourses || 'None'}</p>
            <p><strong>Preferred Time Slot:</strong> ${convenientTime}</p>
          </div>
          <table width="100%" border="0" cellspacing="0" cellpadding="0" style="margin-top: 30px; border-top: 1px solid #e2e8f0; padding-top: 10px;">
            <tr>
              <td style="font-size: 11px; color: #64748b; font-family: sans-serif;">
                Sent via Bright Life Educational Institute Website
              </td>
              <td align="right" style="font-size: 11px; color: #64748b; font-family: sans-serif;">
                Powered by <a href="https://techsangi.com.np" style="color: #ff5b5b; text-decoration: none; font-weight: bold;">Tech Sangi</a>
              </td>
            </tr>
          </table>
        </div>
      `

      const { data, error } = await resend.emails.send({
        from: 'Bright Life Admissions <onboarding@resend.dev>',
        to: targetEmail,
        subject: `[Admission Inquiry] Grade ${grade} registration - from ${firstName} ${lastName}`,
        html: htmlContent,
        replyTo: email,
      })

      if (error) {
        return NextResponse.json({ error: error.message }, { status: 400 })
      }

      return NextResponse.json({ success: true, data })
    }

    if (formType === 'newsletter') {
      const { email } = body

      if (!email) {
        return NextResponse.json({ error: 'Email is required' }, { status: 400 })
      }

      let audienceId = ''

      try {
        // 1. Get the list of audiences from Resend
        const audiencesList = await resend.audiences.list()
        
        if (audiencesList.data && audiencesList.data.length > 0) {
          audienceId = audiencesList.data[0].id
        } else {
          // 2. If no audience exists, create a default Newsletter list
          const newAudience = await resend.audiences.create({ name: 'Newsletter Subscribers' })
          if (newAudience.data) {
            audienceId = newAudience.data.id
          }
        }

        if (!audienceId) {
          throw new Error('Failed to find or create a Resend audience list.')
        }

        // 3. Add contact to the Resend audience list
        const contactResult = await resend.contacts.create({
          email: email,
          audienceId: audienceId,
          unsubscribed: false,
        })

        if (contactResult.error) {
          return NextResponse.json({ error: contactResult.error.message }, { status: 400 })
        }

        return NextResponse.json({ success: true, data: contactResult.data })
      } catch (apiErr: any) {
        return NextResponse.json({ error: apiErr.message || 'Resend API operation failed.' }, { status: 400 })
      }
    }

    return NextResponse.json({ error: 'Invalid form type' }, { status: 400 })
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}
