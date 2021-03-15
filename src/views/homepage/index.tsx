import React, { FC, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import _ from "lodash";
import { RootState, RootDispatch } from "../../models";

const Homepage: FC = () => {
  const state = useSelector((state: RootState) => state);
  const dispatch = useDispatch<RootDispatch>();
  
  useEffect(() => {
    if (_.isEmpty(state.user)) {
      dispatch.user.getUserInfo();
    }
  }, [state, dispatch]);

  return <div className="h-screen pt-9 text-center text-4xl">Homepage</div>;
};

export default Homepage;
