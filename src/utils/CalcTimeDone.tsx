

export default function CalcTimeDone(timeStart: string, timeEnd: string): string {
  const [startHours, startMinutes] = timeStart.split(':').map(Number);
  const [endHours, endMinutes] = timeEnd.split(':').map(Number);

  const startTotalMinutes = startHours * 60 + startMinutes;
  const endTotalMinutes = endHours * 60 + endMinutes;

  let diffMinutes = endTotalMinutes - startTotalMinutes;

  // Trường hợp thời gian kết thúc nhỏ hơn thời gian bắt đầu (qua ngày mới)
  if (diffMinutes < 0) {
    diffMinutes += 24 * 60; // Thêm 24 giờ (1440 phút)
  }

  const hours = Math.floor(diffMinutes / 60);
  const minutes = diffMinutes % 60;

  // Định dạng hh:mm
  const formattedHours = String(hours).padStart(2, '0');
  const formattedMinutes = String(minutes).padStart(2, '0');

  return `${formattedHours}:${formattedMinutes}`;
}