type RankingElement = {
  name: string;
  score: number;
  speed: number;
};

export function updateRanking(name: string, score: number, speed: number) {
  const storageData = localStorage.getItem("ranking");
  const newElement: RankingElement = {
    name,
    score,
    speed,
  };

  if (!storageData) {
    localStorage.setItem("ranking", JSON.stringify([newElement]));
    return;
  }

  const ranking = JSON.parse(storageData) as RankingElement[];
  let i = ranking.length - 1;
  while (i >= 0) {
    if (ranking[i].score > score) break;
    if (ranking[i].score === score && ranking[i].speed > speed) break;
    i--;
  }
  ranking.splice(i + 1, 0, newElement);
  if (ranking.length > 10) ranking.pop();
  localStorage.setItem("ranking", JSON.stringify(ranking));
}

export function getRanking(): RankingElement[] | null {
  const storageData = localStorage.getItem("ranking");
  return storageData ? JSON.parse(storageData) : null;
}
