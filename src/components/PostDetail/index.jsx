import Link from "next/link";
import React from "react";

export function PostDetail({ post }) {
  console.log(post);
  const getContentFragment = (index, text, obj, type) => {
    let modifiedText = text;

    if (obj) {
      if (obj.bold) {
        modifiedText = <b key={index}>{text}</b>;
      }

      if (obj.italic) {
        modifiedText = <em key={index}>{text}</em>;
      }

      if (obj.underline) {
        modifiedText = <u key={index}>{text}</u>;
      }

      if (obj.href) {
        modifiedText = (
          <a
            key={index}
            href={obj.href}
            target={obj.openInNewTab ? "_blank" : "_blank"}
            className="font-bold underline hover:text-primary-900 transition duration-75"
          >
            {obj.title}
          </a>
        );
      }
    }

    switch (type) {
      case "heading-three":
        return (
          <h3 key={index} className="text-2xl font-semibold mb-4">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h3>
        );
      case "paragraph":
        return (
          <p key={index} className="text-base mb-8">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </p>
        );
      case "heading-four":
        return (
          <h4 key={index} className="text-md font-semibold mb-4">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h4>
        );
      case "image":
        return (
          <img
            key={index}
            alt={obj.title}
            height={obj.height}
            width={obj.width}
            src={obj.src}
          />
        );
      default:
        return modifiedText;
    }
  };

  return (
    <div className="text-zinc-50 max-w-7xl mx-auto px-4 sm:px-6 lg-px-8 mt-10 ">
      {/*Container*/}

      <div className="flex flex-col gap-10 md:flex-row">
        {/*Header*/}
        <div className="flex flex-col justify-center gap-10">
          {/*Top */}
          <div className="flex items-center justify-between">
            <div>{post.tags}</div>
            <div className="border-2 border-orange-500 rounded-3xl px-3 py-2 text-sm lg:text-base">
              {post.categories[0].name}
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold">{post.title}</h3>
            <p className="text-base font-normal my-6">{post.excerpt}</p>
            <a
              href={post.linkProject.raw.children[0].children[1].href}
              target="_blank"
              className="bg-primary-900 text-xl py-2 px-3 rounded-lg text-zinc-800 hover:bg-primary-900/75"
            >
              {post.linkProject.raw.children[0].children[1].title}
            </a>
          </div>
        </div>
        <div>
          <img
            src={post.featuredImage.url}
            alt={post.title}
            className="rounded-lg"
          />
        </div>
      </div>

      <div className="flex flex-col md:gap-20 md:flex-row">
        <div className="mt-10">
          {post.content.raw.children.map((typeObj, index) => {
            const children = typeObj.children.map((item, itemindex) =>
              getContentFragment(itemindex, item.text, item)
            );

            return getContentFragment(index, children, typeObj, typeObj.type);
          })}
        </div>

        <div className="mt-10">
          {post.available.raw.children.map((typeObj, index) => {
            const children = typeObj.children.map((item, itemindex) =>
              getContentFragment(itemindex, item.text, item)
            );

            return getContentFragment(index, children, typeObj, typeObj.type);
          })}
        </div>
      </div>
    </div>
  );
}
