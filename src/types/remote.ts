export type RemoteBoard = {
  title: string;
  description: string;
};

export type RemoteBoardList = RemoteBoard[];

export type RemoteAchievementPlayer = {
  name: string;
  date: string;
};

export type Achievement = {
  title: string;
  description: string;
  players: RemoteAchievementPlayer[];
};

export type RemoteAchievementList = Achievement[];
