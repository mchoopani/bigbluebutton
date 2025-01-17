import styled from 'styled-components';
import Button from '/imports/ui/components/button/component';
import Modal from '/imports/ui/components/modal/simple/component';
import {
  smPaddingX,
  smPaddingY,
  lgPaddingX,
  lgPaddingY,
  descriptionMargin,
  titlePositionLeft,
  jumboPaddingY,
} from '/imports/ui/stylesheets/styled-components/general';
import {
  colorGrayDark,
  colorGray,
} from '/imports/ui/stylesheets/styled-components/palette';
import {
  headingsFontWeight,
  lineHeightBase,
} from '/imports/ui/stylesheets/styled-components/typography';

const RemoveUserModal = styled(Modal)`
  padding: ${smPaddingY};
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0;
  margin-top: 0;
  margin-right: ${descriptionMargin};
  margin-left: ${descriptionMargin};
  margin-bottom: ${lgPaddingX};
`;

const Header = styled.div`
  margin: 0;
  padding: 0;
  border: none;
  line-height: ${titlePositionLeft};
  margin-bottom: ${lgPaddingY};
`;

const Title = styled.div`
  color: ${colorGrayDark};
  font-weight: ${headingsFontWeight};
  font-size: ${jumboPaddingY};
`;

const Description = styled.div`
  text-align: center;
  line-height: ${lineHeightBase};
  color: ${colorGray};
  margin-bottom: ${jumboPaddingY};
`;

const BanUserCheckBox = styled.input`
  position: relative;
  top: 0.134rem;
  margin-right: 0.5rem;
  [dir="rtl"] & {
      margin-right: 0;
      margin-left: 0.5rem;
  }
`;

const Footer = styled.div`
  display:flex;
`;

const ConfirmButtom = styled(Button)`
  padding-right: ${jumboPaddingY};
  padding-left: ${jumboPaddingY};
  margin: 0 ${smPaddingX} 0 0;

  [dir="rtl"] & {
    margin: 0 0 0 ${smPaddingX};
  }
`;

const DismissButtom = styled(ConfirmButtom)`
  box-shadow: 0 0 0 1px ${colorGray};
`;

export default {
  RemoveUserModal,
  Container,
  Header,
  Title,
  Description,
  BanUserCheckBox,
  Footer,
  ConfirmButtom,
  DismissButtom,
};
