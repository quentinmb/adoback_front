import React from "react";
import {connect} from "react-redux";
import {withStyles} from "@material-ui/core";
// import ReactPlayer from 'react-player';
import videoStyle from "../../styles/video/videoStyle";
import TextField from "@material-ui/core/TextField";
import Fab from "@material-ui/core/Fab";
import {YoutubeSearchedFor as YoutubeSearchIcon, Search as SearchIcon} from '@material-ui/icons';
import {allVideos, localResearch} from '../../actions/video';
// import {isMobile} from 'react-device-detect';
import Image from 'material-ui-image';
// import Grid from "@material-ui/core/Grid";

class Video extends React.Component {

    state = {
        searchField: '',
    };

    componentDidMount() {
        this.props.allVideos();
    }

    handleSearchInput = (e) => {
        this.setState({[e.target.name]: e.target.value})
    };

    reloadVideos = () => {
        this.props.allVideos();
    };

    loadVideo = (video, e) => {
        console.log(video)
    };

    loadVideos = () => {
        this.props.localResearch(this.state.searchField);
    };

    render() {
        let {videos, classes} = this.props;

        if (videos.length) {
            videos = videos.map((video) => {
                return (
                    <div key={video.url} className={'row'} onClick={this.loadVideo.bind(this, video)}>
                        <div className={'col'}>
                            <Image
                                src={`https://i.ytimg.com/vi/yaqe1qesQ8c/maxresdefault.jpg?_=0`}
                                aspectRatio={(16 / 9)}
                                disableSpinner
                            />
                        </div>
                        <div className={'col'}>
                            <span>{video.title}</span>
                        </div>
                    </div>
                );
            });

        }

        return (
            <div>
                <TextField
                    id="standard-full-width"
                    placeholder="Type here what you want"
                    fullWidth
                    margin="normal"
                    value={this.state.searchField}
                    name={'searchField'}
                    onChange={this.handleSearchInput}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <div>
                    <Fab color="primary" onClick={this.loadVideos} aria-label="search">
                        <SearchIcon/>
                    </Fab>
                    <Fab color="primary" aria-label="youtube search">
                        <YoutubeSearchIcon/>
                    </Fab>
                </div>
                <div>
                    {videos}
                </div>
                {/*<ReactPlayer*/}
                {/*    width={isMobile ? '100%': null}*/}
                {/*    height={isMobile ? null : '500px'}*/}
                {/*    className={isMobile ? classes.videoPlayerMobile : '' }*/}
                {/*    url='https://www.youtube.com/watch?v=XDc5HUVMI5U'*/}
                {/*/>*/}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        videos: state.videoReducer.videos,
    };
};

Video = withStyles(videoStyle)(Video);

export default connect(mapStateToProps, {allVideos, localResearch})(Video);
