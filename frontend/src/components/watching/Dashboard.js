import React, { Fragment } from "react";

import Videos from "./Videos";
import Movies from "./Movies";
import { VideoForm } from "./Form";

export default function Dashboard() {
  return (
    <Fragment>
      <VideoForm />
      <Videos />
      <Movies />
    </Fragment>
  );
}
