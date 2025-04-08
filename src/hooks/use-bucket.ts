import { useEffect, useState } from "react";

import { fetchData } from "services/bucket";

export default function useBucket() {
  const [board, setBoard] = useState([]);

  useEffect(() => {
    async function test() {
      const data = await fetchData();

      setBoard(data as any);
    }

    test();
  }, []);

  console.log({ board });

  return { board };
}
