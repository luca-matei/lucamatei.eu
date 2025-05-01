"use client";
import React from 'react';
import MasonryLayout from "@/app/(with-footer)/blog/MasonryLayout";
import {BLOG_POSTS} from "@/blog-posts/BlogPosts";

export default function Blog() {
  return (
    <div className={"mx-auto max-w-7xl px-6 lg:px-8 pt-24"}>
      <MasonryLayout items={BLOG_POSTS} />
    </div>
  );
}
