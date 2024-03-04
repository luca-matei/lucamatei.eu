import { NextResponse, NextRequest } from 'next/server'
const nodemailer = require('nodemailer');

export async function POST(request) {
    const formData = await request.formData();
    const firstName = formData.get('first-name');
    const lastName = formData.get('last-name') || '';
    const name = `${firstName} ${lastName}`.trim();
    const email = formData.get('email');
    const phone = formData.get('phone-number') || '';
    const message = formData.get('message');

    if (!firstName || firstName.length < 2 || firstName.length > 32) {
        return NextResponse.json({ message: "First name is required and must be between 2 and 32 characters." }, { status: 400 });
    }
    if (lastName && (lastName.length < 2 || lastName.length > 32)) {
        return NextResponse.json({ message: "Last name must be between 2 and 32 characters." }, { status: 400 });
    }
    if (!email || !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email) || email.length > 64) {
        return NextResponse.json({ message: "Invalid email format." }, { status: 400 });
    }
    if (phone && !/^\+?([0-9]{1,3})?([0-9]{10})$/.test(phone) && phone.length > 16) {
        return NextResponse.json({ message: "Invalid phone number format. Expected format: +1234567890 or 1234567890" }, { status: 400 });
    }
    if (!message || message.length < 8 || message.length > 4096) {
        return NextResponse.json({ message: "Message is required and must be between 8 and 4096 characters." }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.NODEMAILER_SENDER,
          pass: process.env.NODEMAILER_PASSWORD,
          },
    });

    try {

        const mail = await transporter.sendMail({
            from: process.env.NODEMAILER_SENDER,
            to: process.env.NODEMAILER_RECEIVER,
            replyTo: email,
            subject: `Website activity from ${email}`,
            html: `
            <p>Name: ${name} </p>
            <p>Email: ${email} </p>
            <p>Phone: ${phone} </p>
            <p>Message: ${message} </p>
            `,
        })

        return NextResponse.json({ message: "Success: email was sent" })

    } catch (error) {
        console.log(error)
        NextResponse.status(500).json({ message: "COULD NOT SEND MESSAGE" })
    }
}