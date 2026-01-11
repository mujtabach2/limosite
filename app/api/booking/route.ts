import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { 
      name, 
      email, 
      phone, 
      serviceType, 
      vehicleType, 
      pickupDate, 
      pickupTime, 
      pickupLocation, 
      dropoffLocation, 
      passengers, 
      specialRequests 
    } = body;

    // Validate required fields
    if (!name || !email || !phone || !serviceType || !vehicleType || !pickupDate || !pickupTime || !pickupLocation || !dropoffLocation) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Send email using Resend
    const data = await resend.emails.send({
      from: 'Apex Limo Booking <onboarding@resend.dev>',
      to: process.env.CONTACT_EMAIL || 'Apexlimo.ca@gmail.com',
      replyTo: email,
      subject: `New Booking Request - ${serviceType}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1a1a1a; border-bottom: 3px solid #f59e0b; padding-bottom: 10px;">
            🚗 New Booking Request
          </h2>
          
          <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1a1a1a; margin-top: 0;">Customer Information</h3>
            <p style="margin: 10px 0;"><strong>Name:</strong> ${name}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p style="margin: 10px 0;"><strong>Phone:</strong> <a href="tel:${phone}">${phone}</a></p>
          </div>
          
          <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1a1a1a; margin-top: 0;">Service Details</h3>
            <p style="margin: 10px 0;"><strong>Service Type:</strong> ${serviceType}</p>
            <p style="margin: 10px 0;"><strong>Vehicle Type:</strong> ${vehicleType}</p>
            <p style="margin: 10px 0;"><strong>Number of Passengers:</strong> ${passengers || 'Not specified'}</p>
          </div>
          
          <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1a1a1a; margin-top: 0;">Trip Details</h3>
            <p style="margin: 10px 0;"><strong>📅 Date:</strong> ${pickupDate}</p>
            <p style="margin: 10px 0;"><strong>🕐 Time:</strong> ${pickupTime}</p>
            <p style="margin: 10px 0;"><strong>📍 Pickup:</strong> ${pickupLocation}</p>
            <p style="margin: 10px 0;"><strong>📍 Drop-off:</strong> ${dropoffLocation}</p>
          </div>
          
          ${specialRequests ? `
          <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1a1a1a; margin-top: 0;">Special Requests</h3>
            <p style="line-height: 1.6;">${specialRequests}</p>
          </div>
          ` : ''}
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 12px;">
            <p>This booking request was submitted from the Apex Executive Limo website.</p>
            <p>Received: ${new Date().toLocaleString()}</p>
            <p style="margin-top: 15px;">
              <strong>Action Required:</strong> Please contact the customer within 1 hour to confirm the booking.
            </p>
          </div>
        </div>
      `,
    });

    return NextResponse.json(
      { success: true, message: 'Booking request sent successfully', data },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Error sending booking email:', error);
    return NextResponse.json(
      { error: 'Failed to send booking request', details: error.message },
      { status: 500 }
    );
  }
}
