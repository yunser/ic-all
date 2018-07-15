export function host (url) {
    const host = url.replace(/^https?:\/\//, '').replace(/\/.*$/, '')
    const parts = host.split('.').slice(-3)
    if (parts[0] === 'www') parts.shift()
    return parts.join('.')
}

export function timeAgo (time) {
    const between = Date.now() / 1000 - Number(time)
    if (between < 3600) {
        return pluralize(~~(between / 60), ' minute')
    } else if (between < 86400) {
        return pluralize(~~(between / 3600), ' hour')
    } else {
        return pluralize(~~(between / 86400), ' day')
    }
}

function pluralize (time, label) {
    if (time === 1) {
        return time + label
    }
    return time + label + 's'
}

export function number(value) {
    if (value > 1000 && value % 1000 === 0) {
        return value / 1000 + 'k'
    }
    return value
}
