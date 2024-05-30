import React from "react";
import { IoCaretBackOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

function AboutUs() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col w-full px-5 py-5 h-screen bg-[#201F31] text-white">
      <IoCaretBackOutline
        onClick={() => navigate(-1)}
        className="text-[#F0B8DD] text-5xl mr-10 hover:cursor-pointer hover:opacity-[50%]"
      />
      <h1 className="text-5xl self-center font-black uppercase">Movie Mania</h1>
      <div className="text-[1vw]">
        <p className="text-2xl">
          Welcome to <b>Movie Mania</b>,
        </p>
        <p className="normal-case">
          your ultimate destination for all things entertainment! At Movie
          Mania, we are passionate about bringing you the latest and greatest in
          the world of movies, TV shows, and celebrity news. Whether you're a
          cinephile, a TV show binge-watcher, or a celebrity enthusiast, our
          platform is designed to keep you informed, entertained, and connected.
        </p>
        <p className="normal-case">
          <b className="text-2xl">What We Offer -</b>
          <br />
          <b className="text-xl">Movie Trailers</b>: <br /> Stay up-to-date with
          the latest movie trailers from Hollywood blockbusters to indie gems.
          Our extensive library of trailers ensures that you never miss a
          preview of the upcoming hits.
          <br />
          <b className="text-xl">TV Shows</b>: <br /> Discover new and trending
          TV shows, complete with trailers, episode guides, and reviews. Whether
          you're into drama, comedy, sci-fi, or reality TV, we've got something
          for everyone.
          <br />
          <b className="text-xl">Celebrity News</b>: <br /> Get the latest scoop
          on your favorite celebrities. From red carpet events to
          behind-the-scenes stories, our celeb news section keeps you in the
          know about what's happening in the world of fame and glamour. <br />
          <b className="text-xl">Comprehensive Database</b>: <br /> Explore our
          extensive database of movies, TV shows, and celebrities. With detailed
          profiles, filmographies, and show lists, finding information about
          your favorite entertainment has never been easier.
          <br />
          Our <b className="text-xl">Vision</b> At Movie Mania, we envision a
          world where entertainment is more accessible and enjoyable for
          everyone. We strive to be at the forefront of the entertainment
          industry by continuously updating our platform with the latest content
          and innovative features. Our goal is to create a vibrant community of
          entertainment lovers who can share their passions and discoveries with
          each other. <br />
          <b className="text-2xl">Why Choose Us</b> - <br />
          <b className="text-xl">User-Friendly Interface</b>: <br /> Our
          intuitive design ensures that you can easily navigate through our site
          and find the content you love. <br />
          <b className="text-xl">Regular Updates</b>: We keep our content fresh
          with regular updates on the latest trailers, news, and releases.{" "}
          <br /> Thank you for choosing Movie Mania as your go-to source for
          entertainment. We are committed to providing you with the best in
          movie trailers, TV shows, and celebrity news. Sit back, relax, and
          immerse yourself in the world of entertainment with Movie Mania!
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
