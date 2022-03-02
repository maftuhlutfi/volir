const formatErrorMessage = message => {
    return message.split('/')[1].split('-').join(' ').replace(').', '')
}

export default formatErrorMessage