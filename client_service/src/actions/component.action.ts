export async function getComponentByPosition(position: number) {
  try {
    const result = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/component/position/${position}`,
      {
        method: "GET",
      }
    );
    const data = await result.json();
    const dataParse = JSON.parse(JSON.stringify(data));
    if (dataParse.code !== 2000) {
      console.log("fail getComByPos::", dataParse);
      return null;
    }

    return dataParse.components;
  } catch (error) {
    console.log("error: ", error);
    return null;
  }
}

export async function getAllComponent() {
  try {
    const result = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/component`,
      {
        method: "GET",
      }
    );
    const data = await result.json();
    const dataParse = JSON.parse(JSON.stringify(data));
    if (dataParse.code !== 2000) {
      console.log("fail getAllCom::", dataParse);
      return null;
    }

    return dataParse.data.components;
  } catch (error) {
    console.log("error::", error);
    return null;
  }
}
