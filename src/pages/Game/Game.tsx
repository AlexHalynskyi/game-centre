import React from 'react';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '@/hooks/redux-hooks';

const Game = () => {
  const { gameId } = useParams();
  const games = useAppSelector(state => state.games.games);
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const currentGame = games.find(game => game.id === gameId)!;
  const { name, description } = currentGame;

  return (
    <div>
      <div>
        { name }
      </div>
      <div>
        { description }
      </div>
    </div>
  );
};

export default Game;
