import React from 'react';
import SuggestedBooksContainer from '../SuggestedBooksContainer/SuggestedBooksContainer';
import Carousel from '../Carousel/Carousel';

const ClubPage = ({ userInfo, match, history, readBooks, currentBook, apiUrl }) => (
  <div className="club-page-component">
    {(readBooks.length !== 0 || currentBook) && <Carousel readBooks={readBooks} currentBook={currentBook} />}
    <SuggestedBooksContainer
      userId={userInfo.user_id}
      clubId={parseInt(match.params.club_id, 10)}
      pathname={history.location.pathname}
      apiUrl={apiUrl}
    />
  </div>
);

export default ClubPage;
