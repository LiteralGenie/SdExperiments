def line_break_soft(text: str, width=10) -> str:
    text = text.strip()
    if not text:
        return ''

    split = text.split()
    lines = [split[0]]

    for word in split[1:]:
        if len(lines[-1]) > width:
            lines.append(word)
        else:
            lines[-1] += " " + word
    return "\n".join(lines)