"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

type SendEmailResponse =
	| {
			success: true;
	  }
	| {
			success: false;
			error: string;
	  };

export const sendEmail = async (formData: FormData): Promise<SendEmailResponse> => {
	const name = formData.get("name");
	const email = formData.get("email");
	const message = formData.get("message");

	if (!name || typeof name !== "string") {
		return {
			success: false,
			error: "Invalid name",
		};
	}

	if (!email || typeof email !== "string") {
		return {
			success: false,
			error: "Invalid email",
		};
	}

	if (!message || typeof message !== "string") {
		return {
			success: false,
			error: "Invalid message",
		};
	}

	try {
		const res = await resend.emails.send({
			from: "onboarding@resend.dev",
			to: "work@ks-kao.com",
			reply_to: [email],
			subject: "New message from portfolio",
			text: `Name: ${name}\nMessage: ${message}\nSender Email: ${email}`,
		});

		if (res.error)
			return {
				success: false,
				error: res.error.name,
			};

		return {
			success: true,
		};
	} catch (e: unknown) {
		let message: string;
		if (e instanceof Error) {
			message = e.message;
		} else if (e && typeof e === "object" && "message" in e) {
			message = String(e.message);
		} else if (typeof e === "string") {
			message = e;
		} else {
			message = "Something went wrong. Please try again";
		}

		return {
			success: false,
			error: message,
		};
	}
};
