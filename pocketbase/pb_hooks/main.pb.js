/// <reference path="../pb_data/types.d.ts" />

// Read the .env file and set the environment variables.
onAfterBootstrap((e) => {
  require(`${__hooks}/lib/env.js`);
});


// Subscriptions

onRecordBeforeCreateRequest((e) => {
  if (!e.record) throw new Error("Record not found")
  if (e.record.get('confirmed')) throw new Error("Cannot create a confirmed subscription");
}, "subscriptions");


onRecordAfterCreateRequest((e) => {
  if (!e.record) throw new Error("Record not found")
  const name = e.record.get("name");
  const email = e.record.get("email");
  const id = e.record.get("id");

  const message = new MailerMessage({
    from: {
      address: $app.settings().meta.senderAddress,
      name:    $app.settings().meta.senderName,
    },
    to: [{address: email}],
    subject: "Confirm Your Subscription",
    text: `Dear ${name},\n\nTo receive messages from us, confirm your subscription by clicking the link: ${process.env.FRONTEND_URL}/confirm-subscription?id=${id}\n\nBest regards,\nThriving Individuals Team`,
    html: `Dear ${name},<br><br>To receive messages from us, confirm your subscription by clicking the link below: <a href="${process.env.FRONTEND_URL}/confirm-subscription?id=${id}">Confirm Subscription</a><br><br>Best regards,<br>Thriving Individuals Team`,
  });

  try {
    $app.newMailClient().send(message)
  } catch (error) {
    console.error(error);
    $app.dao().deleteRecord(e.record)
    throw new Error("Failed to send confirmation email")
  }
}, "subscriptions");


onRecordBeforeUpdateRequest((e) => {
  if (!e.record) throw new Error("Record not found")
  const copy = e.record.originalCopy()
  if (e.record.get("name") !== copy.get("name") || e.record.get("email") !== copy.get("email") || !e.record.get("confirmed")) throw new Error("Cannot update name, email, or unconfirm a subscription");
  if (copy.get("confirmed")) throw new Error("Cannot confirm an already confirmed subscription")
}, "subscriptions");


onRecordAfterUpdateRequest((e) => {
  if (!e.record) throw new Error("Record not found")
  const name = e.record.get("name");
  const email = e.record.get("email");
  
  const message = new MailerMessage({
    from: {
      address: $app.settings().meta.senderAddress,
      name:    $app.settings().meta.senderName,
    },
    to: [{address: email}],
    subject: "Welcome to Thriving Individuals!",
    text: `Dear ${name},\n\nThank you for subscribing to the Thriving Individuals newsletter.\n\nStay excellent,\nThriving Individuals Team`,
    html: `Dear ${name},<br/><br/>Thank you for subscribing to the Thriving Individuals newsletter.<br/><br/>Stay excellent,<br/>Thriving Individuals Team`,
  });

  try {
    $app.newMailClient().send(message)
  } catch (error) {
    console.error(error);
    e.record.set("confirmed", false)
    throw new Error("Failed to send confirmation email")
  }
}, 'subscriptions');

// Contacts

onRecordAfterCreateRequest((e) => {
  if (!e.record) throw new Error("Record not found")
  const subject = e.record.get("subject");
  const email = e.record.get("email");
  const message = e.record.get("message");

  const emailMessage = new MailerMessage({
    from: {
      address: $app.settings().meta.senderAddress,
      name:    $app.settings().meta.senderName,
    },
    to: [{address: process.env.CONTACT_EMAIL}],
    subject: `CONTACT: ${subject}`,
    text: `Sender: ${email}
        Subject: ${subject}
        Message: ${message}`,
    html: `<p><b>Sender:</b> ${email}</p>
        <p><b>Subject:</b> ${subject}</p>
        <p><b>Message:</b> ${message}</p>`,
  });

  try {
    $app.newMailClient().send(emailMessage)
  } catch (error) {
    console.error(error);
    $app.dao().deleteRecord(e.record)
    throw new Error("Failed to send contact email")
  }
}, 'contacts');