const useGenre = (selectedGenres) => {
  if (selectedGenres.length < 1) return "";

  const SelectedIds = selectedGenres.map((g) => g.id).join(",");
  // console.log(SelectedIds)

  // return (
  //   SelectedIds.reduce((acc, curr) => acc + "," + curr)
  //   SelectedIds.join(",")
  // )
  return SelectedIds
  
}

export default useGenre