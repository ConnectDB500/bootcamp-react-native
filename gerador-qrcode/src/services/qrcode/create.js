import prompt from "prompt";
import promptQRCode from "../../prompt/prompt-qrcode.js";
import handle from "../../services/qrcode/handle.js";

async function createQRCode(){
  prompt.get(promptQRCode, handle)

  prompt.start();
}

export default createQRCode;

