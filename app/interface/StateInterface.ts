export default interface ResetGameHelpers {
  setCurrentQuestion: React.Dispatch<React.SetStateAction<number>>;
  setScore: React.Dispatch<React.SetStateAction<number>>;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  setHide: React.Dispatch<React.SetStateAction<boolean>>;
}
