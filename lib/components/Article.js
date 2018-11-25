import React from 'react';

// global as we dont wont react the create styles each time it renders the article component
const styles = {
  article: {
    paddingBottom: 10,
    borderBottomStyle: 'solid',
    borderBottomColor: '#aaa',
    borderBottomWidth: 1,
    marginBottom: 10
  },
  title: {
    fontWeight: 'bold'
  },
  date: {
    fontSize: '0.8em',
    color: '#888'
  },
  author: {
    paddingTop: 10,
    paddingBottom: 10
  },
  body: {
    paddingLeft: 20
  }
};

// global as we dont wont react the create styles each time it renders the article component
// we can do it as it does not depends on any particular article component
const dateDisplay = dateString => new Date(dateString).toDateString();

const Article = props => {
  const { article, actions } = props;
  const author = actions.lookupAuthor(article.authorId);
  console.log(author);
  console.log(article.authorId);
  // if  you want to define a function here, because it depends on some props, better use a class comp
  return (
    <div style={styles.article}>
      <div style={styles.title}>{article.title}</div>
      <div style={styles.date}>{dateDisplay(article.date)}</div>
      <div style={styles.author}>
        <a href={author.website}>
          {author.firstName} {author.lastName}
        </a>
      </div>
      <div style={styles.body}>{article.body}</div>
    </div>
  );
};

export default Article;
