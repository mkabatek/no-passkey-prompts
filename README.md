# No passkey creation prompts

A tiny Chrome extension that stops websites from popping up Chrome's
"Create a passkey" dialog.

It overrides `navigator.credentials.create()` on every page and rejects
WebAuthn (`publicKey`) registration requests with `NotAllowedError`, the same
error a site gets when you click Cancel.

## What it does and doesn't block

- Blocks: creating passkeys and registering security keys, on all sites and frames.
- Doesn't block: signing in with passkeys or security keys you already have
  (`navigator.credentials.get()` is untouched).
- Doesn't hide a site's own "set up a passkey" pages or banners; it only stops
  the browser dialog.

## Install

1. Clone this repo.
2. Open `chrome://extensions` and turn on **Developer mode**.
3. Click **Load unpacked** and select the cloned folder.

Chrome loads the extension from that folder, so keep it in place.

## Enrolling a passkey or security key

Toggle the extension off in `chrome://extensions`, reload the page, enroll,
then toggle it back on.
