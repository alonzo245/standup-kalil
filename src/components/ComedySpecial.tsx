import styled from '@emotion/styled';
import { DESKTOP_MQ } from '../theme/theme.constants';

const ComedySpecial: React.FC = () => {
  return (
    <IframeContainer>
      <iframe
        style={{ margin: '0 auto', border: '9px solid yellow' }}
        width='440'
        height='260'
        src='https://www.youtube.com/embed/nUJFT6Q2AnI?si=6Ohsblm9-PIw6DST&showinfo=0'
        title='YouTube video player'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;'
        allowFullScreen={true}
      />
    </IframeContainer>
  );
};

export default ComedySpecial;

const IframeContainer = styled.div`
  margin: 40px auto;
  text-align: center;

  & iframe {
    width: 100% !important;
  }

  ${DESKTOP_MQ} {
    width: 440px;
    height: 260px;
    position: relative;
    padding-right: 0;
    padding-top: 32px;
    margin: unset;
    text-align: unset;
  }
`;
