import React, { Fragment } from "react";

import Movies from "./Movies";
import Serials from "./Serials";
import Anime from "./Anime";
import VideoForm from "./Form";

export default function Dashboard() {
  return (
    <Fragment>
      <VideoForm />
      <Movies />
      <Serials />
      <Anime />
    </Fragment>
  );
}
