import _ from 'lodash';
import React, {Component} from 'react';
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/Video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyCw1cqmr4Pfe4J6tzodQRUBSVjU96FMKTg';

//App Component manages the whole application
class App extends Component {

  constructor(props) {
    super(props);

    this.state={
      videos:[],
      selectedVideo:null
    };

    this.videoSearch('The Chainsmokers - Closer (Lyric) ft. Halsey');
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {

    const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);
    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={(selectedVideo) => {this.setState({selectedVideo})} }
          videos={this.state.videos} />
      </div>
    );
  }
};

ReactDom.render(<App />, document.querySelector('.container'));
