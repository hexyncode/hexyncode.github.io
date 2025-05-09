# About Me
    
def about():
    name = "Callum Howell"
    nickname = ["hexyn", "slippuu"]
    role = "Full-Stack Developer"
    stack = ["Django", "React"]

    print(f"Hi, I'm {name}, a {role}.")
    print(f"I also go by online nicknames:")
    for name in nickname:
        print(f"    - {name}")
    print(f"I specialize in {', '.join(stack)}.")

if __name__ == "__main__":
    about()