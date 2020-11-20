import React, { Component } from 'react'

export default class Blogs extends Component {
    render() {
        return (
            <div className="latest-blog">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="title-all text-center">
                                <h1>latest blog</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet lacus enim.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-lg-4 col-xl-4">
                            <div className="blog-box">
                                <div className="blog-img">
                                    <img className="img-fluid" src="/thewayshop/images/blog-img.jpg"  />
                                </div>
                                <div className="blog-content">
                                    <div className="title-blog">
                                        <h3>Fusce in augue non nisi fringilla</h3>
                                        <p>Nulla ut urna egestas, porta libero id, suscipit orci. Quisque in lectus sit amet urna dignissim feugiat. Mauris molestie egestas pharetra. Ut finibus cursus nunc sed mollis. Praesent laoreet lacinia elit id lobortis.</p>
                                    </div>
                                    <ul className="option-blog">
                                        <li><a href="#" data-toggle="tooltip" data-placement="right"  data-original-title="Likes"><i className="far fa-heart" /></a></li>
                                        <li><a href="#" data-toggle="tooltip" data-placement="right"  data-original-title="Views"><i className="fas fa-eye" /></a></li>
                                        <li><a href="#" data-toggle="tooltip" data-placement="right"  data-original-title="Comments"><i className="far fa-comments" /></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 col-xl-4">
                            <div className="blog-box">
                                <div className="blog-img">
                                    <img className="img-fluid" src="/thewayshop/images/blog-img-01.jpg"  />
                                </div>
                                <div className="blog-content">
                                    <div className="title-blog">
                                        <h3>Fusce in augue non nisi fringilla</h3>
                                        <p>Nulla ut urna egestas, porta libero id, suscipit orci. Quisque in lectus sit amet urna dignissim feugiat. Mauris molestie egestas pharetra. Ut finibus cursus nunc sed mollis. Praesent laoreet lacinia elit id lobortis.</p>
                                    </div>
                                    <ul className="option-blog">
                                        <li><a href="#" data-toggle="tooltip" data-placement="right"  data-original-title="Views"><i className="fas fa-eye" /></a></li>
                                        <li><a href="#" data-toggle="tooltip" data-placement="right"  data-original-title="Comments"><i className="far fa-comments" /></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 col-xl-4">
                            <div className="blog-box">
                                <div className="blog-img">
                                    <img className="img-fluid" src="/thewayshop/images/blog-img-02.jpg"  />
                                </div>
                                <div className="blog-content">
                                    <div className="title-blog">
                                        <h3>Fusce in augue non nisi fringilla</h3>
                                        <p>Nulla ut urna egestas, porta libero id, suscipit orci. Quisque in lectus sit amet urna dignissim feugiat. Mauris molestie egestas pharetra. Ut finibus cursus nunc sed mollis. Praesent laoreet lacinia elit id lobortis.</p>
                                    </div>
                                    <ul className="option-blog">
                                        <li><a href="#" data-toggle="tooltip" data-placement="right"  data-original-title="Likes"><i className="far fa-heart" /></a></li>
                                        <li><a href="#" data-toggle="tooltip" data-placement="right"  data-original-title="Views"><i className="fas fa-eye" /></a></li>
                                        <li><a href="#" data-toggle="tooltip" data-placement="right"  data-original-title="Comments"><i className="far fa-comments" /></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
