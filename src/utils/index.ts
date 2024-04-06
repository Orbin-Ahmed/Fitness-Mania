import CryptoJS from "crypto-js";

const secretKey =
  "5c5079139eafb6db723fddea811861dc9295c5f3cad5f2e0b9ff3b954bcb21b5";

const storeSessionStorage = (name: string, token: string) => {
  token = encryptData(token, secretKey);
  window.sessionStorage.setItem(name, token);
};

const getSessionStorage = (name: string): string | null => {
  const data = window.sessionStorage.getItem(name);
  if (data === null) {
    return null;
  } else {
    const value = decryptData(data, secretKey);
    return value;
  }
};

const removeSessionStorage = (name: string) => {
  window.sessionStorage.removeItem(name);
};

// Encrypt Data
function encryptData(data: string, secretKey: string): string {
  const ciphertext = CryptoJS.AES.encrypt(data, secretKey, {
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  });

  return ciphertext.toString();
}

// Decrypt Data
function decryptData(encryptedData: string, secretKey: string): string {
  const bytes = CryptoJS.AES.decrypt(encryptedData, secretKey, {
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  });

  const plaintext = bytes.toString(CryptoJS.enc.Utf8);
  return plaintext;
}

export { storeSessionStorage, getSessionStorage, removeSessionStorage };
