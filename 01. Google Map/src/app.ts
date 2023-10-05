// form이 null이 아니라는 것을 확실하게 하기 위해서 ! 타입 붙여줌
const form = document.querySelector('form')!;
// Type Casting (value access 해결!)
const addressInput = document.getElementById('address')! as HTMLInputElement;

function searchAddressHandler(event: Event) {
  event.preventDefault();
  // addressInput.value가 무엇을 갖고오는지 모르기떄문에 Type Error 발생
  const enteredAddress = addressInput.value;
  // send this to Google's API
}

form.addEventListener('submit', searchAddressHandler);
