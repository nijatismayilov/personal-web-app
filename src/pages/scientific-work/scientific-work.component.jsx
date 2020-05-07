import React from 'react';
import { useSpring, animated } from 'react-spring';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { fetchScientificItemsStart } from '../../redux/scientific/scientific.actions';
import { selectIsScientificEmpty, selectIsScientificFethcing, selectScientificItemsDescending } from '../../redux/scientific/scientific.selectors';

import WithSpinner from '../../components/with-spinner/with-spinner.component';
import ScientificItem from '../../components/scientific-item/scientific-item.component';

import './scientific-work.styles.scss';

const ScientificWorkBody = ({ scientificItems }) => {
  const fade = useSpring({
    from: {
      opacity: 0,
    },
    opacity: 1,
    config: {
      mass: 2.3,
      tension: 141,
      friction: 34,
      precision: 0.018
    }
  });

  return (
    <animated.div className="scientific main u-align-items-center" style={fade}>
      <h1 className="heading-primary col-md-10">elmi fəaliyyətim</h1>

      <div className="sites-and-newspapers__content col-md-10">
        {
          scientificItems
            ? (
              scientificItems.map(({ id, ...otherProps }) => (
                <ScientificItem key={id} {...otherProps} />
              ))
            )
            : null
        }
      </div>
    </animated.div>
  );
};

const ScientificWorkWithSpinner = WithSpinner(ScientificWorkBody);

class ScientificWork extends React.Component {
  componentDidMount() {
    const { isEmpty, fetchScientificItemsStart } = this.props;

    if (isEmpty) fetchScientificItemsStart();
  }

  render() {
    const { isFetching, scientificItems } = this.props;
    
    return (
      <section>
        <ScientificWorkWithSpinner scientificItems={scientificItems} isLoading={isFetching} />
      </section>
    );
  }
};

const mapStateToProps = createStructuredSelector({
  isEmpty: selectIsScientificEmpty,
  isFetching: selectIsScientificFethcing,
  scientificItems: selectScientificItemsDescending
});

const mapDispatchToProps = dispatch => ({
  fetchScientificItemsStart: () => dispatch(fetchScientificItemsStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(ScientificWork);