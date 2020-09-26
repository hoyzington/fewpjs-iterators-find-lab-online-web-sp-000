// const testVar = {};

function superbowlWin(bowls) {
  const win = bowls.find(bowl => bowl.result === 'W');
  if (win) {
    return bowl.year;
  }
}
