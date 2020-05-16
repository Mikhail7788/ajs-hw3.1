function healthStatus(player) {
  const { health } = player;
  let status;
  if (health > 50) {
    status = 'healthy';
  } if ((health > 15) && (health <= 50)) {
    status = 'wounded';
  } if (health <= 15) {
    status = 'critical';
  }
  return status;
}

export default healthStatus;