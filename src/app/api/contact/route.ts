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
        <div style="font-family: 'Segoe UI', Helvetica, Arial, sans-serif; background-color: #f8fafc; padding: 40px 10px; color: #334155;">
          <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 16px; border: 1px solid #e2e8f0; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);">
            
            <!-- Top Brand Accent Bar -->
            <div style="height: 6px; background-color: #ff5b5b; background: linear-gradient(90deg, #ffe01b 0%, #ff5b5b 100%);"></div>
            
            <div style="padding: 32px 24px;">
              <!-- Header -->
              <div style="margin-bottom: 24px;">
                <h3 style="margin: 0; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; color: #ff5b5b; font-weight: 800;">Bright Life Portal</h3>
                <h1 style="margin: 4px 0 0 0; font-size: 22px; font-weight: 800; color: #0f172a; line-height: 1.2;">New Inquiry Received</h1>
              </div>
              
              <!-- Content Details Grid -->
              <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-size: 13px; color: #64748b; width: 140px;"><strong>Sender Name</strong></td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-size: 13px; color: #0f172a;">${firstName} ${lastName}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-size: 13px; color: #64748b;"><strong>Email Address</strong></td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-size: 13px; color: #0f172a;"><a href="mailto:${email}" style="color: #ff5b5b; text-decoration: none;">${email}</a></td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-size: 13px; color: #64748b;"><strong>Subject</strong></td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-size: 13px; color: #0f172a;">${subject}</td>
                </tr>
              </table>
              
              <!-- Message Body -->
              <div style="margin-top: 20px; padding: 20px; background-color: #f8fafc; border-radius: 12px; border-left: 4px solid #ffe01b;">
                <h4 style="margin: 0 0 8px 0; font-size: 12px; text-transform: uppercase; color: #64748b; letter-spacing: 0.5px;">Message Details</h4>
                <p style="margin: 0; font-size: 14px; line-height: 1.6; color: #334155; font-style: italic; white-space: pre-wrap;">"${message}"</p>
              </div>

            </div>

            <!-- Footer Signature (Branding Tech Sangi with Logo) -->
            <div style="background-color: #f8fafc; padding: 24px; text-align: center; border-top: 1px solid #e2e8f0;">
              <div style="margin-bottom: 12px; text-align: center;">
                <a href="https://techsangi.com.np" target="_blank" style="text-decoration: none; display: inline-block;">
                  <img src="https://techsangi.com.np/_next/image?url=%2Fimages%2Flogo.png&w=64&q=75" alt="Tech Sangi Logo" width="36" height="36" style="border: none; outline: none; display: block; margin: 0 auto;" />
                </a>
              </div>
              <p style="margin: 0; font-size: 11px; color: #94a3b8; font-weight: 500; font-family: sans-serif;">
                Sent via Bright Life Educational Institute Portal
              </p>
              <p style="margin: 4px 0 0 0; font-size: 11px; color: #64748b; font-weight: 700; font-family: sans-serif;">
                Powered by <a href="https://techsangi.com.np" target="_blank" style="color: #ff5b5b; text-decoration: none;">Tech Sangi</a>
              </p>
            </div>

          </div>
        </div>
      `

      const { data, error } = await resend.emails.send({
        from: 'Bright Life Website <techsangi@brightlife.edu.np>',
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
        <div style="font-family: 'Segoe UI', Helvetica, Arial, sans-serif; background-color: #f8fafc; padding: 40px 10px; color: #334155;">
          <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 16px; border: 1px solid #e2e8f0; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);">
            
            <!-- Top Brand Accent Bar -->
            <div style="height: 6px; background-color: #ff5b5b; background: linear-gradient(90deg, #ffe01b 0%, #ff5b5b 100%);"></div>
            
            <div style="padding: 32px 24px;">
              <!-- Header -->
              <div style="margin-bottom: 24px;">
                <h3 style="margin: 0; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; color: #ff5b5b; font-weight: 800;">Bright Life Admissions</h3>
                <h1 style="margin: 4px 0 0 0; font-size: 22px; font-weight: 800; color: #0f172a; line-height: 1.2;">New Admission Form</h1>
              </div>
              
              <!-- Content Details Grid -->
              <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-size: 13px; color: #64748b; width: 180px;"><strong>Student Name</strong></td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-size: 13px; color: #0f172a; font-weight: bold;">${firstName} ${lastName}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-size: 13px; color: #64748b;"><strong>Guardian Name</strong></td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-size: 13px; color: #0f172a;">${guardianName}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-size: 13px; color: #64748b;"><strong>Contact Number</strong></td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-size: 13px; color: #0f172a; font-weight: bold;"><a href="tel:${contactNo}" style="color: #ff5b5b; text-decoration: none;">${contactNo}</a></td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-size: 13px; color: #64748b;"><strong>Email Address</strong></td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-size: 13px; color: #0f172a;"><a href="mailto:${email}" style="color: #ff5b5b; text-decoration: none;">${email}</a></td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-size: 13px; color: #64748b;"><strong>Gender</strong></td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-size: 13px; color: #0f172a;">${gender}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-size: 13px; color: #64748b;"><strong>Current Address</strong></td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-size: 13px; color: #0f172a;">${address}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-size: 13px; color: #64748b;"><strong>School / College</strong></td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-size: 13px; color: #0f172a;">${schoolName}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-size: 13px; color: #64748b;"><strong>Grade / Class</strong></td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-size: 13px; color: #0f172a; font-weight: bold;">${grade}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-size: 13px; color: #64748b;"><strong>Semester / Subject</strong></td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-size: 13px; color: #0f172a;">${semesterSubject || 'N/A'}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-size: 13px; color: #64748b;"><strong>Other Course Interests</strong></td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-size: 13px; color: #0f172a;">${otherCourses || 'None'}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-size: 13px; color: #64748b;"><strong>Preferred Time Slot</strong></td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-size: 13px; color: #22c55e; font-weight: bold;">${convenientTime}</td>
                </tr>
              </table>

            </div>

            <!-- Footer Signature (Branding Tech Sangi with Logo) -->
            <div style="background-color: #f8fafc; padding: 24px; text-align: center; border-top: 1px solid #e2e8f0;">
              <div style="margin-bottom: 12px; text-align: center;">
                <a href="https://techsangi.com.np" target="_blank" style="text-decoration: none; display: inline-block;">
                  <img src="https://techsangi.com.np/_next/image?url=%2Fimages%2Flogo.png&w=64&q=75" alt="Tech Sangi Logo" width="36" height="36" style="border: none; outline: none; display: block; margin: 0 auto;" />
                </a>
              </div>
              <p style="margin: 0; font-size: 11px; color: #94a3b8; font-weight: 500; font-family: sans-serif;">
                Sent via Bright Life Educational Institute Portal
              </p>
              <p style="margin: 4px 0 0 0; font-size: 11px; color: #64748b; font-weight: 700; font-family: sans-serif;">
                Powered by <a href="https://techsangi.com.np" target="_blank" style="color: #ff5b5b; text-decoration: none;">Tech Sangi</a>
              </p>
            </div>

          </div>
        </div>
      `

      const { data, error } = await resend.emails.send({
        from: 'Bright Life Admissions <techsangi@brightlife.edu.np>',
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
        const listObj = audiencesList.data as any
        
        if (listObj && listObj.data && listObj.data.length > 0) {
          audienceId = listObj.data[0].id
        } else {
          // 2. If no audience exists, create a default Newsletter list
          const newAudience = await resend.audiences.create({ name: 'Newsletter Subscribers' })
          const newAudienceData = newAudience.data as any
          if (newAudienceData) {
            audienceId = newAudienceData.id
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
