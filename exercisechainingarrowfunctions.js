const playList = [
  { title: 'Learn to Code', dur: '5:34' },
  { title: 'Learn to Code', dur: '2:33' },
  { title: 'Learn to Skate', dur: '15:36' },
  { title: 'Learn to Code', dur: '8:32' },
  { title: 'Learn to Skate', dur: '10:17' },
  { title: 'Learn to Skate', dur: '15:36' },
  { title: 'Learn to Code', dur: '13:55' },
];

const playListFilter = playList
  .filter(video => video.title === 'Learn to Code')
  .map((time) => {
    let arr = time.dur.split(':');
    return (+arr[0] * 60) + +arr[1];
  })
  .reduce((acc, curr) => acc + curr, 0);

console.log(playListFilter);

// console.log(playList[0].title);

//logs the array
// console.log(playList);

//log the array first index [0] through the sixth index [6]
// console.log(playList[0]);
