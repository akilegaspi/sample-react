export default class PostService {

  constructor(request) {
    this.request = request;
    this.doPost = this.doPost.bind(this);
    this.getPosts = this.getPosts.bind(this);
    this.likePost = this.likePost.bind(this);
    this.commentPost = this.commentPost.bind(this);
    this.sharePost = this.sharePost.bind(this);
    this.getComments = this.getComments.bind(this);
    this.getLikes = this.getLikes.bind(this);
  }

  getPosts(id){
    return this.request.get(`/post/${id}`);
  }

  doPost(content, file) {
    let postForm = {content, file},
        requestObj = {
          method : 'POST',
          data : postForm,
          url: '/post',
          responseType: 'json'
        };
    return this.request(requestObj);
  }

  likePost(postId) {
    let likeForm = {postId},
        requestObj = {
          method: 'POST',
          data: likeForm,
          url: '/like',
          responseType: 'json'
        };
    return this.request(requestObj);
  }

  commentPost(user, postId, comment) {
    let commentForm = {user, postId, comment},
        requestObj = {
          method: 'POST',
          data: commentForm,
          responseType: 'json',
          url: '/comment'
        };
    return this.request(requestObj);
  }

  sharePost(postId) {
    let shareFform = {postId},
        requestObj = {
          method: 'POST',
          data: shareForm,
          responseType: 'json',
          url: '/share'
        };
    return this.request(requestObj);
  }

  getComments(postId) {
    let requestObj = {
      method: 'GET',
      responseType: 'json',
      url: `/comment/${postId}`
    }
    return this.request(requestObj);
  }

  getLikes(postId) {
    let requestObj = {
      method: 'GET',
      responseType: 'json',
      url: `/like/${postId}`
    };
    return this.request(requestObj);
  }

}
