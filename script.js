const net = new brain.NeuralNetwork();

const data = [{"input":{"r":0,"g":0,"b":0},"output":[1]},{"input":{"r":1,"g":1,"b":1},"output":[0]},{"input":{"r":0.8297587629456777,"g":0.8924067678210552,"b":0.772794361128186},"output":[0]},{"input":{"r":0.8770862525156358,"g":0.4874912917462686,"b":0.8537209363598315},"output":[0]},{"input":{"r":0.5613942341707732,"g":0.5079662609801245,"b":0.579518270633018},"output":[1]},{"input":{"r":0.8126457661143867,"g":0.6017523847377866,"b":0.8382316364795781},"output":[0]},{"input":{"r":0.6229083332816951,"g":0.2575871982001725,"b":0.40297946039585186},"output":[1]},{"input":{"r":0.5134628590509134,"g":0.9256100695044873,"b":0.3075612938171508},"output":[0]},{"input":{"r":0.5401786752079913,"g":0.13696538279551973,"b":0.5187989685388841},"output":[1]},{"input":{"r":0.3752145505540614,"g":0.9013705263465086,"b":0.9676737121608467},"output":[0]},{"input":{"r":0.46584634772616096,"g":0.2674650868868138,"b":0.5290830974859633},"output":[1]},{"input":{"r":0.11666820888965623,"g":0.009168815312738499,"b":0.40090638079862884},"output":[1]},{"input":{"r":0.17428580317371134,"g":0.6576806168920277,"b":0.06835121929005217},"output":[0]},{"input":{"r":0.9030269822363604,"g":0.3060391806272942,"b":0.4052161941221539},"output":[0]},{"input":{"r":0.5715999285182636,"g":0.5866970288804862,"b":0.5621790343710464},"output":[1]},{"input":{"r":0.09496426655943746,"g":0.46668909530449554,"b":0.13459674141565503},"output":[0]},{"input":{"r":0.05978624255304066,"g":0.8376823641747766,"b":0.5667214729632766},"output":[0]},{"input":{"r":0.5817761214158659,"g":0.4304972196968977,"b":0.004099009483155225},"output":[0]},{"input":{"r":0.6517527349443581,"g":0.7442665935418225,"b":0.08838129739366041},"output":[0]},{"input":{"r":0.714911952229651,"g":0.8895585844840947,"b":0.7569524745812113},"output":[0]},{"input":{"r":0.6025659703817454,"g":0.27754749196736483,"b":0.4389663549026084},"output":[1]},{"input":{"r":0.40657143270124463,"g":0.11551571167266972,"b":0.6847871368689749},"output":[0]},{"input":{"r":0.8818358571222855,"g":0.22051685606520777,"b":0.16124808068676977},"output":[1]},{"input":{"r":0.4520365458682061,"g":0.20503991027809287,"b":0.3099281827790312},"output":[1]},{"input":{"r":0.48785376911436096,"g":0.21751117897339478,"b":0.31206810692444},"output":[1]},{"input":{"r":0.9929866224865778,"g":0.8451109424031884,"b":0.6916299571236517},"output":[0]},{"input":{"r":0.46424044648275675,"g":0.42128404046520784,"b":0.3987737275150851},"output":[1]},{"input":{"r":0.44786947938127963,"g":0.8596743087438046,"b":0.09708401115158982},"output":[0]},{"input":{"r":0.7880555454021483,"g":0.20641409126182153,"b":0.7540436072175756},"output":[0]}]

net.train(data);

const colorEl = document.getElementById('color');
const guessEl = document.getElementById('guess');
const whiteButton = document.getElementById('white-button');
const blackButton = document.getElementById('black-button');
const printButton = document.getElementById('print-button');
let color;
setRandomColor();

whiteButton.addEventListener('click', () => {
  chooseColor(1)
})

blackButton.addEventListener('click', () => {
  chooseColor(0)
})

printButton.addEventListener('click', print)

function chooseColor(value) {
  data.push({
    input: color,
    output: [value]
  })
  setRandomColor()
}

function print(){
  console.log(JSON.stringify(data))
}


function setRandomColor() {
  color = {
    r: Math.random(),
    g: Math.random(),
    b: Math.random()
  };
  const guess = net.run(color)[0];
  guessEl.style.color = guess > .5 ? '#FFF' : '#000';
  colorEl.style.backgroundColor =
    `rgba(${color.r * 255}, ${color.g * 255}, ${color.b * 255})`;
}
