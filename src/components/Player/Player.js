import React from 'react';
import { css } from '@emotion/core';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const player = () => css`
  .rhap_time {
    color: #fff;
  }
  .rhap_container {
    background-color: #303030;
    box-shadow: none;
    padding: 10px 0;
    &:focus {
      outline: none;
    }
  }
  .rhap_main-controls-button {
    color: #008966;
    &:focus {
      outline: none;
    }
    &:hover {
      color: #00bc8c;
    }
  }
  .rhap_progress-section {
    flex: 5 1 auto;
    &:focus {
      outline: none;
    }
  }
  .rhap_additional-controls {
    flex: 0 0 auto;
  }
  .rhap_progress-indicator {
    background-color: #008966;
    box-shadow: none;
    &:hover {
      background-color: #00bc8c;
    }
  }
  .rhap_volume-indicator {
    background-color: #008966;
    box-shadow: none;
    opacity: 1;
    &:hover {
      background-color: #00bc8c;
    }
  }
  .rhap_volume-button {
    color: #008966;
    &:focus {
      outline: none;
    }
    &:hover {
      color: #00bc8c;
    }
  }
  .rhap_progress-container {
    width: 30%;
    &:focus {
      outline: none;
    }
  }
  .rhap_volume-bar-area {
    &:focus {
      outline: none;
    }
  }
  .rhap_download-progress {
    background-color: #868686;
  }
  .rhap_progress-filled {
    background-color: #fff;
  }
  .rhap_volume-bar {
    background-color: #fff;
  }
  @media (max-width: 1200px) {
    .rhap_progress-container {
      width: 15%;
    }
  }
  @media (max-width: 992px) {
    .rhap_progress-container {
      width: 50%;
    }
    @media (max-width: 500px) {
      .rhap_progress-container {
        width: 28%;
      }
    }
  }
`;

class Player extends React.PureComponent {
  render() {
    return (
      <div css={player}>
        <AudioPlayer
          src={this.props.src}
          layout='horizontal-reverse'
          showJumpControls={false}
          customAdditionalControls={[]}
        />
      </div>
    );
  }
}

export default Player;
