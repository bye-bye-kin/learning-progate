//  for文
//初期値：繰り返す回数の初期値
//条件式：繰り返しを継続する条件
//増減値：「初期値」を増減する式
for (  初期値;  条件式;  増減値  ) {
 
  // 繰り返す処理を書く
 
}
for (  var i = 0;  i < 10;  i++  ) {
 
  // 繰り返し処理
  
 }




// for文を完成させてください
for (let number=1;number<=100;number++) {
  
    // if文を用いて、numberが3の倍数の時に「3の倍数です」、そうでないときは数字を出力してください
    if(number%3===0){
      console.log("3の倍数です");
    }
    else{
    console.log(number);
    }
  }


//配列
//複数の値をまとめて管理する。[値1, 値2, 値3] のように作ります。配列に入っているそれぞれの値のことを要素と呼びます。

const animals=["dog","cat","sheep"];
console.log(animals);


//配列の要素にはそれぞれインデックス番号という番号がついています。インデックス番号は、0から始まることに注意しましょう。
const animals = ["dog", "cat", "sheep"];
// 配列の1つ目の要素を出力してください
console.log(animals[0]);
// 配列の3つ目の要素を出力してください
console.log(animals[2]);

//配列も後から要素を更新できる。
// 配列animalsの3つ目の要素を「rabbit」に更新してください
animals[2]="rabbit";
// 配列animalsの3つ目の要素をコンソールに表示して下さい
console.log(animals[2]);

//配列に対して繰り返し処理を行う.forを使う。変数の値は0から始めることに注意しましょう。
const animals = ["dog", "cat", "sheep"];
// for文を用いて、配列の値を順にコンソールに出力してください
for(let i=0; i<3; i++){　　//iが0~2の間をループする
  console.log(animals[i]);
}

//配列.lengthとすることで、配列の要素数を取得できます。
const animals = ["dog", "cat", "sheep", "rabbit", "monkey", "tiger", "bear", "elephant"];
// lengthを用いて配列の要素の数を出力してください
console.log(animals.length);
// lengthを用いて条件式を書き換えてください
for (let i = 0; i < animals.length; i++) {
  console.log(animals[i]);
}

//オブジェクト
//{プロパティ1: 値1, プロパティ2: 値2}のようにつくります。
//配列は要素を[]で囲みましたが、オブジェクトは{}で囲みます。
//プロパティと値の間はコロン（ : ）で繋ぎます。また、配列と同様に、要素と要素はコンマ（,）で区切ります。
const character={
  name:"にんじゃわんこ",age:14
};
// characterの値を出力してください
console.log(character);
//「オブジェクト.プロパティ名 = 新しい値」とすることでオブジェクトの値を更新することができます。
character.age=20;
//オブジェクトの値を取り出すには、対応するプロパティ名を用いて 、「オブジェクト.プロパティ名」のようにします。
console.log(character.name);


//オブジェクトを含む配列。長くなるので改行するといい。
const characters = [
  {name: "にんじゃわんこ", age: 14},　//0
  {name: "ひつじ仙人", age: 1000}    //1       ←インデックス
];

// charactersの1つ目の要素をコンソールに出力してください
console.log(characters[0]);
// charactersの2つ目の要素の「name」に対応する値をコンソールに出力してください
console.log(characters[1].name);

//「オブジェクトを要素に持つ配列」と「繰り返し処理」
//キャラクターの情報（名前・年齢）を順に出力してみます。
const characters = [
  {name: "にんじゃわんこ", age: 14},
  {name: "ひつじ仙人", age: 100},
  {name: "ベイビーわんこ", age: 5},
];
// for文を完成させてください
for (let i=0;i<characters.length ;i++) {
  console.log("---------");
  // 定数characterを定義してください
  const character=characters[i];
  // 「名前は〇〇です」を出力してください
  console.log(`名前は${character.name}です`);
  // 「〇〇歳です」を出力してください
  console.log(`${character.age}歳です`);
}

//定義されていない値が出力されると、unfieldと出力される。unfield歳です→年齢は秘密ですにする。
 // if文を追加してください
 if(character.age===undefined){
  console.log("年齢は秘密です");}
  else {
    console.log(`${character.age}歳です`);
  }


//このようなオブジェクトは、「オブジェクト名.プロパティ.プロパティ」のように呼び出します。
const cafe = {
  name: "Progateカフェ",
  businessHours: {
    opening:"10:00(AM)",
    closing:"8:00(PM)"
  },
};
// 「店名:〇〇」を出力してください
console.log(`店名:${cafe.name}`);
// 「営業時間:〇〇から△△」を出力してください
console.log(`営業時間: ${cafe.businessHours.opening}から${cafe.businessHours.closing}`);







