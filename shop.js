// JavaScript Document
function show() {
  			const form = document.forms['form'];
  			const name = form.elements.name.value;
  			const email = form.elements.email.value;
  			const phone = form.elements.phone.value;
  			const address = form.elements.add.value;
  			const gender = form.elements.sex.value;

  			// 檢查必填欄位是否有填寫
  			if (!name || !email || !phone || !address || !gender) {
    			alert("請填寫所有必填欄位");
				return;
  			}

  			// 檢查電話格式
  			if (!validatePhone(phone)) {
    			alert("請輸入正確的電話格式");
    			return;
  			}

  			// 檢查電子郵件格式
  			if (!validateEmail(email)) {
				alert("請輸入正確的電子郵件格式");
    		return;
  			}

  			// 若通過驗證，顯示聯絡資訊
  			alert(
    			"聯絡資訊:\n" +
    			"姓名：" + name + "\n" +
    			"性別：" + (gender === 'male' ? '男' : '女') + "\n" +
    			"聯絡電話：" + phone + "\n" +
    			"E-Mail：" + email + "\n" +
    			"地址：" + address + "\n" +
    			"請確認您的聯絡資訊!"
  				);
		}

		function validatePhone(phone) {
			// 正則表達式，匹配十位數字的電話號碼格式
			const phonePattern = /^\d{10}$/;
			// 使用正則表達式進行驗證
			return phonePattern.test(phone);
		}


		function validateEmail(email) {
  			// 正則表達式，匹配常見的電子郵件地址格式
  			const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  			// 使用正則表達式進行驗證
  			return emailPattern.test(email);
		}
	
	function show1 () {
		alert("感謝您的訂購!")
	}