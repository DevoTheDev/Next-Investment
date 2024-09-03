import crayons

def custom_log(type: str, message: str):
    if type == 'SUCCESS':
        print(crayons.green(f'[ {type} ] : {message}'))
    elif type == 'WARNING':
        print(crayons.yellow(f'[ {type} ] : {message}'))
    elif type == 'ERROR':
        print(crayons.red(f'[ {type} ] : {message}'))
    elif type == 'INFO':
        print(crayons.cyan(f'[ {type} ] : {message}'))
    else:
        print(crayons.white(f'[ {type} ] : {message}'))
