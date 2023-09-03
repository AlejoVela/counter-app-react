import PropTypes from 'prop-types';

export const FirstApp = ({ title, subTitle, name }) => {
  return (
    <div>
      <h1>{ title }</h1>
      <p>{ subTitle }</p>
      <p>{ name }</p>
    </div>
  );
};

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}

FirstApp.defaultProps = {
  title: 'Soy un titulo por defecto',
  subTitle: 'Soy un subtitulo por defecto',
  name: 'Diego',
}