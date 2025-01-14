// 아래 자바스크립트 코드를 타입스크립트로 변환하기
// *****************************************************************************************

function getDiff(fromPoint, toPoint) {
  let dx = toPoint[0] - fromPoint[0];
  let dy = toPoint[1] - fromPoint[1];
  return [dx, dy];
}

const monster: {
  name: string;
  level: number;
  hasGold?: boolean;
  skills: string[];
} = {
  name: '고블린',
  level: 22,
  skills: ['태권도', '특공무술'],
  move(fromPoint, toPoint) {
    let [dx, dy] = getDiff(fromPoint, toPoint);
    console.log(`오른쪽으로 ${dx} 위쪽으로 ${dy} 만큼 이동!`);
  }
}

const current: [number, number] = [0, 0];
const target: [number, number] = [4, 5];
monster.move(current, target);


// 타입스크립트로 변환한 결과
// *****************************************************************************************

function getDiff(fromPoint: [number, number], toPoint: [number, number]): [number, number] {
  let dx = toPoint[0] - fromPoint[0];
  let dy = toPoint[1] - fromPoint[1];
  return [dx, dy];
}

const monster: {
  name: string;
  level: number;
  hasGold?: boolean;
  skills: string[];
  move: (fromPoint: [number, number], toPoint: [number, number]) => void
} = {
  name: '고블린',
  level: 22,
  skills: ['태권도', '특공무술'],
  move(fromPoint, toPoint) {
    let [dx, dy] = getDiff(fromPoint, toPoint);
    console.log(`오른쪽으로 ${dx} 위쪽으로 ${dy} 만큼 이동!`);
  }
}

const current: [number, number] = [0, 0];
const target: [number, number] = [4, 5];
monster.move(current, target);



// 타입 별칭, 인터페이스  사용
// *****************************************************************************************

type Point = [number, number];

interface Entity {
  id: string;
  createdAt: Date;
  updatedAt: Date;
}

interface Monster extends Entity {
  name: string;
  level: number;
  hasGold?: boolean;
  skills: string[];
  move: (fromPoint: Point, toPoint: Point) => void
}

function getDiff(fromPoint: Point, toPoint: Point) {
  let dx = toPoint[0] - fromPoint[0];
  let dy = toPoint[1] - fromPoint[1];
  return [dx, dy];
}

const monster: Monster = {
  id: 'g001',
  name: '고블린',
  level: 22,
  skills: ['태권도', '특공무술'],
  move(fromPoint, toPoint) {
    let [dx, dy] = getDiff(fromPoint, toPoint);
    console.log(`오른쪽으로 ${dx} 위쪽으로 ${dy} 만큼 이동!`);
  },
  createdAt: new Date(),
  updatedAt: new Date(),
}

const current: Point = [0, 0];
const target: Point = [4, 5];
monster.move(current, target);
