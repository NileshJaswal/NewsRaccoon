import React, { Component } from "react";
import { Card, Button } from "flowbite-react";

export class NewsItem extends Component {
  render() {
    let { title, description, newsUrl, imageUrl } = this.props;
    return (
      <Card className=" newsItem" imgAlt="Meaningful alt text for an image that is not purely decorative" imgSrc={imageUrl}>
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}...</h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">{description}...</p>
        <a href={newsUrl} target="_blank" rel="noreferrer"> <Button  gradientMonochrome="failure">Read More</Button></a>
      </Card>
    );
  }
}
export default NewsItem;
