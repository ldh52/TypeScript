// 배열
const cart: string[] = [];
cart.push('c001');
cart.push('c002');

// 배열의 배열
const carts: string[][] = [
  ['c001', 'c002'],
  ['c003'],
];

// 튜플
let mySize: [number, number, string] = [175, 30, 'L'];


// 객체 타입
let product: {
  id: string;
  name: string;
  price: number;
  membersOnly?: boolean; // 필수가 아닌 프로퍼티
  sizes: string[];
} = {
  id: 'c001',
  name: '코드잇 블랙 후디',
  price: 129000,
  sizes: ['M', 'L', 'XL'],
};

if (product.membersOnly) {
  console.log('회원 전용 상품');
} else {
  console.log('일반 상품');
}

// 프로퍼티의 개수를 정하지 않고, 프로퍼티 값의 타입을 정하고 싶다면 아래와 같은 문법 활용
let stock: { [id: string]: number } = {
  c001: 3,
  c002: 0,
  c003: 2,
};


// 함수 타입
// 리턴 타입을 지정하는 경우에는 다음 코드처럼 작성
function addToCart(id: string, quanity: number): boolean {
    if (어떤 조건) {
     return false;
  }

  return true;
}

// 리턴 타입을 미리 주지 않고 리턴 값으로부터 추론하게 할 수도 있다.
function addToCart(id: string, quanity: number) {
    if (어떤 조건) {
     return false;
  }

  return true;
}

// 함수를 값으로 사용하는 경우 화살표 함수처럼 작성
(id: string, quanity: number) => boolean

// Rest 파라미터는 배열 타입으로 쓴다. 값을 리턴하지 않는 경우 리턴 타입을 void로 할 수 있다.
(...ids: string[]) => void;
