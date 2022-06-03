let streakTotal;
let relapseDate = "June 3, 2022 00:00:00";
let dayBadges = [1,2,3,4,5,6,7,10,12,15,20,25,30,36,40,50,60,70,85,100,120,140,160,180,200,220,240,260,280,300,320,340,360,365];

const countUp = () => {
  let days = Number(document.getElementById('days').innerHTML);
  let hours = Number(document.getElementById('hours').innerHTML);
  let minutes = Number(document.getElementById('minutes').innerHTML);
  let seconds = Number(document.getElementById('seconds').innerHTML);

  //console.log(days, hours, minutes, seconds);

  // --------------kasih penjelasan
  
  seconds++;
  
  if (seconds == 60) {
    minutes++;
    seconds = 0;
  };

  if (minutes == 60) {
    hours++;
    minutes = 0;
  };

  if (hours == 24) {
    days++;
    hours = 0;
  };

  // --------------kasih penjelasan

  if (seconds < 10) {
    seconds = '0' + seconds ;
  };

  if (minutes < 10) {
    minutes = '0' + minutes ;
  };

  if (hours < 10) {
    hours = '0' + hours ;
  };

  if (days < 10) {
    days = '0' + days ;
  };

  // --------------kasih penjelasan

  streakTotal = ((Number(seconds)/3600)/24 + (Number(minutes)/60)/24 + Number(hours)/24 + Number(days));

  //console.log(streakTotal); 

  // --------------kasih penjelasan

  document.getElementById('seconds').innerHTML = seconds;
  document.getElementById('minutes').innerHTML = minutes;
  document.getElementById('hours').innerHTML = hours;
  document.getElementById('days').innerHTML = days;

  setTimeout(countUp, 1000);
};

const changeQuotes = () => {
  function randomItemsFromArray(array) {
    return array[Math.floor(Math.random()*array.length)]
  };
  
  let quotes = [
    'If you make a mistake and do not correct it, this is called a mistake.<br>- Confucius -',
    'The very cave you are afraid to enter turns out to be the source of what you are looking for.<br>- Joseph Campbell -',
    "If you don't fight for what you want, then don't cry for what you lost.<br>- Will Smith -",
    "Life isn't about getting and having, it's about giving and being.<br>- Kevin Kruse -",
    "You may be disappointed if you fail, but you are doomed if you don't try.<br>- Beverly Sills -",
    "Whether you think you can or you think you can't, you're right.<br>- Henry Ford -",
    "Move out of your comfort zone. You can only grow if you are willing to feel awkward and uncomfortable when you try something new.<br>- Brian Tracy -",
    "Strength and growth come only through continuous effort and struggle.<br>- Napoleon Hill -",
    "Look at my success. I didn't achieve it overnight. It has been the product of many years' struggle, and every year, my times have shown gradual improvement.<br>- Mo Farah -",
    "You're imperfect, and you're wired for struggle, but you are worthy of love and belonging.<br>- Brene Brown -",
    "Once all struggle is grasped, miracles are possible.<br>- Mao Zedong -",
    "Don't feel entitled to anything you didn't sweat and struggle for.<br>- Marian Wright Edelman -",
    "My story is a freedom song of struggle. It is about finding one's purpose, how to overcome fear and to stand up for causes bigger than one's self.<br>- Coretta Scott King -",
    "Life is essentially a cheat and its conditions are those of defeat; the redeeming things are not happiness and pleasure but the deeper satisfactions that come out of struggle.<br>- F. Scott Fitzgerald -",
    "The probability that we may fail in the struggle ought not to deter us from the support of a cause we believe to be just.<br>- Abraham Lincoln -",
    "Don't struggle about the struggle. In other words, life's full of ups and downs. So if you're struggling, don't worry, everyone else has or will at some point.<br>- Sean Covey -",
    "What we all need to do is find the wellspring that keeps us going, that gives us the strength and patience to keep up this struggle for a long time.<br>- Winona LaDuke -",
    "To have striven, to have made the effort, to have been true to certain ideals — this alone is worth the struggle.<br>- William Osler -",
    "Do your best and let God do the rest.<br>- Ben Carson -",
    "Yesterday I dared to struggle. Today I dare to win.<br>- Bernadette Devlin -",
    "Life is one long struggle in the dark.<br>- Lucretius -",
    " I'm glad I've had to struggle. It's made me the artist I am now.<br>- Jessie J. -",
    "Believe me, the reward is not so great without the struggle.<br>- Wilma Rudolph -",
    "Life is like a piano. White keys are the good days, And black keys are the bad ones. But overtime you have to realize that you need both to make music.",
    "You'll never know if you're not the one who's continuing to take that path... Unless you keep moving forward.<br>- Eren Yeager -",
    "If you win, you live. If you lose, you die. If you don't fight, you can't win!<br>- Eren Yeager -"
  ];

  document.getElementById('quotes').innerHTML = randomItemsFromArray(quotes);
}

const resetTime = () => {
  document.getElementById('seconds').innerHTML = '00';
  document.getElementById('minutes').innerHTML = '00';
  document.getElementById('hours').innerHTML = '00';
  document.getElementById('days').innerHTML = '00';
};

const resetConfirmation = () => {
  document.getElementById('popup-place').innerHTML = '<div class="backdrop"><div class="confirmation-box1"><div class="confirmation-box2">Are you sure want to reset it?</div><div class="button-div confirmation-button-div"><button class="confirmation-button" onclick="removeConfirmationBox();">No</button><button class="confirmation-button" onclick="removeConfirmationBox();resetTime();">Yes</button></div></div></div>';
};

const removeConfirmationBox = () => {
  document.getElementById('popup-place').innerHTML = '';
};

const Badges = () => {
  document.getElementById('popup-place').innerHTML = `
  
  <div class="backdrop" onclick="removeBadges();">
    <div class="badge-box1">
      <div class="badge-box2">
        <p class="badge-text">Day 1 😢</p>
        <div class="progress-bar1">
          <div id="day1" class="progress-bar2">30%</div>
        </div>
      </div>

      <div class="badge-box2">
        <p class="badge-text">Day 2</p>
        <div class="progress-bar1">
          <div id="day2" class="progress-bar2">30%</div>
        </div>
      </div>

      <div class="badge-box2">
        <p class="badge-text">Day 3</p>
        <div class="progress-bar1">
          <div id="day3" class="progress-bar2">30%</div>
        </div>
      </div>

      <div class="badge-box2">
        <p class="badge-text">Day 4</p>
        <div class="progress-bar1">
          <div id="day4" class="progress-bar2">30%</div>
        </div>
      </div>

      <div class="badge-box2">
        <p class="badge-text">Day 5</p>
        <div class="progress-bar1">
          <div id="day5" class="progress-bar2">30%</div>
        </div>
      </div>

      <div class="badge-box2">
        <p class="badge-text">Day 6</p>
        <div class="progress-bar1">
          <div id="day6" class="progress-bar2">30%</div>
        </div>
      </div>

      <div class="badge-box2">
        <p class="badge-text">Day 7</p>
        <div class="progress-bar1">
          <div id="day7" class="progress-bar2">30%</div>
        </div>
      </div>

      <div class="badge-box2">
        <p class="badge-text">Day 10 👏</p>
        <div class="progress-bar1">
          <div id="day10" class="progress-bar2">30%</div>
        </div>
      </div>

      <div class="badge-box2">
        <p class="badge-text">Day 12</p>
        <div class="progress-bar1">
          <div id="day12" class="progress-bar2">30%</div>
        </div>
      </div>

      <div class="badge-box2">
        <p class="badge-text">Day 15</p>
        <div class="progress-bar1">
          <div id="day15" class="progress-bar2">30%</div>
        </div>
      </div>

      <div class="badge-box2">
        <p class="badge-text">Day 20</p>
        <div class="progress-bar1">
          <div id="day20" class="progress-bar2">30%</div>
        </div>
      </div>

      <div class="badge-box2">
        <p class="badge-text">Day 25</p>
        <div class="progress-bar1">
          <div id="day25" class="progress-bar2">30%</div>
        </div>
      </div>

      <div class="badge-box2">
        <p class="badge-text">Day 30 😆<p>
        <div class="progress-bar1">
          <div id="day30" class="progress-bar2">30%</div>
        </div>
      </div>

      <div class="badge-box2">
        <p class="badge-text">Day 36</p>
        <div class="progress-bar1">
          <div id="day36" class="progress-bar2">30%</div>
        </div>
      </div>

      <div class="badge-box2">
        <p class="badge-text">Day 40</p>
        <div class="progress-bar1">
          <div id="day40" class="progress-bar2">30%</div>
        </div>
      </div>

      <div class="badge-box2">
        <p class="badge-text">Day 50</p>
        <div class="progress-bar1">
          <div id="day50" class="progress-bar2">30%</div>
        </div>
      </div>

      <div class="badge-box2">
        <p class="badge-text">Day 60</p>
        <div class="progress-bar1">
          <div id="day60" class="progress-bar2">30%</div>
        </div>
      </div>

      <div class="badge-box2">
        <p class="badge-text">Day 70</p>
        <div class="progress-bar1">
          <div id="day70" class="progress-bar2">30%</div>
        </div>
      </div>

      <div class="badge-box2">
        <p class="badge-text">Day 85</p>
        <div class="progress-bar1">
          <div id="day85" class="progress-bar2">30%</div>
        </div>
      </div>

      <div class="badge-box2">
        <p class="badge-text">Day 100 💯</p>
        <div class="progress-bar1">
          <div id="day100" class="progress-bar2">30%</div>
        </div>
      </div>

      <div class="badge-box2">
        <p class="badge-text">Day 120</p>
        <div class="progress-bar1">
          <div id="day120" class="progress-bar2">30%</div>
        </div>
      </div>

      <div class="badge-box2">
        <p class="badge-text">Day 140</p>
        <div class="progress-bar1">
          <div id="day140" class="progress-bar2">30%</div>
        </div>
      </div>

      <div class="badge-box2">
        <p class="badge-text">Day 160</p>
        <div class="progress-bar1">
          <div id="day160" class="progress-bar2">30%</div>
        </div>
      </div>

      <div class="badge-box2">
        <p class="badge-text">Day 180</p>
        <div class="progress-bar1">
          <div id="day180" class="progress-bar2">30%</div>
        </div>
      </div>

      <div class="badge-box2">
        <p class="badge-text">Day 200 😎</p>
        <div class="progress-bar1">
          <div id="day200" class="progress-bar2">30%</div>
        </div>
      </div>

      <div class="badge-box2">
        <p class="badge-text">Day 220</p>
        <div class="progress-bar1">
          <div id="day220" class="progress-bar2">30%</div>
        </div>
      </div>

      <div class="badge-box2">
        <p class="badge-text">Day 240</p>
        <div class="progress-bar1">
          <div id="day240" class="progress-bar2">30%</div>
        </div>
      </div>

      <div class="badge-box2">
        <p class="badge-text">Day 260</p>
        <div class="progress-bar1">
          <div id="day260" class="progress-bar2">30%</div>
        </div>
      </div>

      <div class="badge-box2">
        <p class="badge-text">Day 280</p>
        <div class="progress-bar1">
          <div id="day280" class="progress-bar2">30%</div>
        </div>
      </div>

      <div class="badge-box2">
        <p class="badge-text">Day 300</p>
        <div class="progress-bar1">
          <div id="day300" class="progress-bar2">30%</div>
        </div>
      </div>

      <div class="badge-box2">
        <p class="badge-text">Day 320</p>
        <div class="progress-bar1">
          <div id="day320" class="progress-bar2">30%</div>
        </div>
      </div>

      <div class="badge-box2">
        <p class="badge-text">Day 340</p>
        <div class="progress-bar1">
          <div id="day340" class="progress-bar2">30%</div>
        </div>
      </div>

      <div class="badge-box2">
        <p class="badge-text">Day 360</p>
        <div class="progress-bar1">
          <div id="day360" class="progress-bar2">30%</div>
        </div>
      </div>

      <div class="badge-box2">
        <p class="badge-text">1 Year! 🎉</p>
        <div class="progress-bar1">
          <div id="day365" class="progress-bar2">30%</div>
        </div>
      </div>
    </div>
  </div>

  `;

  let percentProcess = streakTotal*100;
  //console.log(streakTotal);

  for (let i of dayBadges) {
    //console.log(i);
    let elementId = 'day' + i;
    if (percentProcess/i > 100) {
      document.getElementById(elementId).style.width = 100 + '%';
      document.getElementById(elementId).innerHTML = 100 + '%';
    } else {
      document.getElementById(elementId).style.width = Math.floor(percentProcess/i) + '%';
      document.getElementById(elementId).innerHTML = Math.floor(percentProcess/i) + '%';
    };
  };
};

const removeBadges = () => {
  document.getElementById('popup-place').innerHTML = '';
};

const getRangeBetweeenTwoDates = () => {
  date1 = new Date(relapseDate);
  date2 = new Date();

  rangeOfDates = Math.floor((date2 - date1)/1000); //in seconds

  let days = Math.floor(rangeOfDates/(24*3600));
  rangeOfDates = rangeOfDates - days*24*3600;

  let hours = Math.floor(rangeOfDates/3600);
  rangeOfDates = rangeOfDates - hours*3600;

  let minutes = Math.floor(rangeOfDates/60);
  rangeOfDates = rangeOfDates - minutes*60;

  let seconds = rangeOfDates;

  document.getElementById('seconds').innerHTML = seconds;
  document.getElementById('minutes').innerHTML = minutes;
  document.getElementById('hours').innerHTML = hours;
  document.getElementById('days').innerHTML = days;
};

const remainingTimesToTarget = () => {
  for (let i of dayBadges) {
    //console.log(i)
    if (streakTotal < i) {
      secondsToNextTarget = (i - streakTotal)*24*3600;
      document.getElementById('time-remaining').innerHTML = Math.round(secondsToNextTarget) + "s to Day " + i;
      //console.log('stop');
      break;
    };
  };

  setTimeout(remainingTimesToTarget, 1000);
};

getRangeBetweeenTwoDates();
countUp();
changeQuotes();
remainingTimesToTarget();
