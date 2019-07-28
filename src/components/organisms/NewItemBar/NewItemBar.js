import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import withContext from 'hoc/withContext';
import Heading from 'components/atoms/Heading/Heading';
import { connect } from 'react-redux';
import { addItem as addItemAction } from 'actions';

const StyledWrapper = styled.div`
  border-left: 10px solid ${({ theme, activecolor }) => theme[activecolor]};
  z-index: 9999;
  position: fixed;
  display: flex;
  padding: 100px 90px;
  flex-direction: column;
  right: 0;
  top: 0;
  height: 100vh;
  width: 680px;
  background-color: white;
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.33s;
  transform: ${({ isVisible }) => (isVisible ? 'translate(0)' : 'translate(100%)')};
`;

const StyledTextArea = styled(Input)`
  margin: 30px 0 100px;
  border-radius: 20px;
  height: 30vh;
`;

const StyledInput = styled(Input)`
  margin-bottom: 20px;
`;

const NewItemBar = ({ pageContext, isVisible, addItem }) => (
  <StyledWrapper activecolor={pageContext} isVisible={isVisible}>
    <Heading big>Create new {pageContext}</Heading>
    <StyledInput placeholder="title" />
    {pageContext === 'articles' && <Input placeholder="link" />}
    <StyledTextArea as="textarea" placeholder="title" />
    <Button
      activeColor={pageContext}
      onClick={() =>
        addItem(pageContext, {
          title: 'Hello Roamn',
          content: 'lorem ipsum dolor sit amet.',
        })
      }
    >
      Add Item
    </Button>
  </StyledWrapper>
);

NewItemBar.propTypes = {
  pageContext: PropTypes.oneOf(['notes', 'twitters', 'articles']),
  isVisible: PropTypes.bool.isRequired,
  addItem: PropTypes.func.isRequired,
};

NewItemBar.defaultProps = {
  pageContext: 'notes',
};

const mapDispatchToProps = dispatch => ({
  addItem: (itemType, itemContent) => dispatch(addItemAction(itemType, itemContent)),
});

export default connect(
  null,
  mapDispatchToProps,
)(withContext(NewItemBar));
