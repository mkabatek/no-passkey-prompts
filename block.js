(() => {
  if (!navigator.credentials || !window.CredentialsContainer) return;
  const proto = CredentialsContainer.prototype;
  const native = proto.create;
  const blocked = function (opts) {
    if (opts && opts.publicKey) {
      console.log('[no-passkey] blocked create()');
      return Promise.reject(new DOMException('blocked', 'NotAllowedError'));
    }
    return native.call(navigator.credentials, opts);
  };
  const apply = () => {
    if (proto.create !== blocked) proto.create = blocked;
    if (navigator.credentials.create !== blocked) navigator.credentials.create = blocked;
  };
  apply();
  // Re-apply in case another extension (e.g. a password manager) overwrites it.
  setInterval(apply, 250);
  console.log('[no-passkey] installed on', location.host);
})();
