interface MemoSectionProps {
  memo: string;
  setMemo: (memo: string) => void;
}

const MemoSection = ({ memo, setMemo }: MemoSectionProps) => (
  <div className="mt-4">
    <h3 className="text-xl font-semibold mb-2">메모하기</h3>
    <textarea
      value={memo}
      onChange={(e) => setMemo(e.target.value)}
      className="w-full p-2 border rounded text-md"
      rows={4}
      placeholder="여기에 메모를 입력해 주세요."
    />
  </div>
);

export default MemoSection;
